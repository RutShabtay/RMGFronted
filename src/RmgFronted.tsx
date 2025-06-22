import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { RMGHeader } from "./components/RMGHeader"
import { RMGText } from "./components/RMGText"
import { RMGButton } from "./components/RMGButton"
import { RMGInput } from "./components/RMGInput"
import { ComponentFactory } from './components/ComponentFactory';
import { downloadCode } from './components/Utils'
import { generateJSXFromConfig } from './components/Utils'
import { ClipboardCopy } from 'lucide-react';
import { ComponentsViewMenu } from './components/ComponentsViewMenu';
import { UsageInstructions } from './components/usageInstructions';

export const RmgFronted = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [uiStructure, setUiStructure] = useState<any>(null);
    const [showModel, setShowModel] = useState(false);
    const [showViewMenu, setShowViewMenu] = useState(false);
    const [showUsageInstructions, setShowUsageInstructions] = useState(false);
    const [mode, setMode] = useState<'login' | 'showCode' | 'ui'>('login');
    const [uiCode, setUiCode] = useState('');

    const callApi = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.post('/api/generate-mockup', { description });
            const result = response.data;
            setIsLoading(false);
            setDescription('');

            if (result.error) {
                alert(`Error Occured---😣: ${result.error}`);
                return;
            }

            setUiStructure(result.structure);
            setUiCode(generateJSXFromConfig(result.structure, 0));
            setShowModel(true);
        }
        catch (error) {
            alert(`Failed to generate mockup- ${error} 😣. Please try again later.`);
            setIsLoading(false);
        }
    };

    return (
        <div>
            <div className="flex flex-col items-center ml-100 gap-4 mt-40">
                <RMGHeader title="Ai Mockup Generator" size="large" color='default'></RMGHeader>
                <form onSubmit={callApi}>
                    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col gap-4">
                        <RMGText text="Enter Text" size='large' weight='bold' className="mr-75"></RMGText>
                        <RMGInput placeholder="Type here" value={description} onChange={(e) => setDescription(e.target.value)} className="border p-2 w-full rounded"></RMGInput>
                        <RMGButton title="Generate Mockup" color="primary" className="transition duration-200 hover:scale-105" type="submit" />
                    </div>
                </form>
            </div>

            {isLoading &&
                <div className="fixed inset-0 flex items-center justify-center bg-none z-50" style={{ paddingTop: '100px' }}>
                    <div className="animate-spin h-16 w-16 rounded-full border-8 border-t-transparent border-blue-500"></div>
                </div>
            }

            {showModel &&
                <div
                    className="fixed inset-0 z-50 overflow-auto flex items-center justify-center p-4"
                    style={{ backgroundColor: 'rgba(83, 80, 80, 0.9)' }}
                    onClick={() => setShowModel(false)}
                >
                    <div
                        className="relative bg-white rounded-xl shadow-xl p-6 w-full max-w-[750px] max-h-[90vh] flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-wrap justify-between gap-3 mb-4">
                            <RMGButton title='X' color='default' onClick={() => { setMode('login'); setShowModel(false); }} />
                        </div>

                        <div className="overflow-auto flex-1">
                            {mode === 'login' && (
                                <div className="space-y-4">

                                    <RMGButton title='Show React Code' color='primary' onClick={(e) => { e.stopPropagation(); setMode('showCode'); }} />

                                    <h2 className="text-xl font-bold">Wanna see the magic? → Login first</h2>

                                    <RMGInput placeholder="Email" value={email} type='email' className="border p-2 w-full rounded" onChange={(e) => setEmail(e.target.value)} />

                                    <RMGInput placeholder="Password" value={password} type='password' className="border p-2 w-full rounded" onChange={(e) => setPassword(e.target.value)} />

                                    <RMGButton title='Login' onClick={() => { uiStructure ? setMode('ui') : alert("Not ready Yet---") }} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" />
                                </div>
                            )}

                            {mode === 'ui' && (

                                <div className="space-y-4">
                                    <RMGButton title='Show React Code' color='primary' onClick={(e) => { e.stopPropagation(); setMode('showCode'); }} />

                                    {uiStructure ? <ComponentFactory config={uiStructure} /> : <p>Loading UI structure...</p>}
                                </div>
                            )}

                            {mode === 'showCode' && (
                                <div>
                                    <div className="justify-center flex gap-2 mb-4">
                                        <RMGButton title='Download👇' onClick={(e) => {
                                            e.stopPropagation();
                                            downloadCode(`Code_${new Date().getDate()}_${new Date().getDay()}_${new Date().getTime()}`, uiCode);
                                        }} />

                                        <RMGButton title='Show Render Ui' color='primary' onClick={(e) => { e.stopPropagation(); setMode('ui'); }} />
                                    </div>
                                    <div className="flex justify-end">
                                        <RMGButton
                                            onClick={() => navigator.clipboard.writeText(uiCode)}
                                            color='secondary'
                                            icon={<ClipboardCopy className="w-5 h-5 text-gray-600" />}
                                        />
                                    </div>
                                    <pre className="text-left bg-gray-100 p-4 rounded max-h-[400px] overflow-auto text-sm">
                                        <code>{uiCode}</code>
                                    </pre>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            }

            {
                <div className='mt-30 ml-100 flex justify-center'>
                    <div className='justify-center flex gap-4 mb-4'>
                        <h1 className='mt-2'>Do you want to see all the components?</h1>
                        <RMGButton title='Show Components' color='default' onClick={() => setShowViewMenu(true)} className="transition duration-200 hover:scale-105" /></div>
                </div>
            }
            <RMGButton title='Show Usage Instructions' color='secondary' className='ml-90 mt-10' onClick={() => setShowUsageInstructions(true)} />

            {showViewMenu && <ComponentsViewMenu close={setShowViewMenu} />}
            {showUsageInstructions && <UsageInstructions close={setShowUsageInstructions} />}
        </div>
    );
};

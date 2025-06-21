import React from 'react';
import { useState } from 'react';
import { RMGHeader } from "./components/RMGHeader"
import { RMGText } from "./components/RMGText"
import { RMGButton } from "./components/RMGButton"
import { RMGInput } from "./components/RMGInput"
import { ComponentFactory } from './components/ComponentFactory';
import { downloadCode } from './components/Utils'
import { generateJSXFromConfig } from './components/Utils'

export const RmgFronted = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [description, setDescription] = useState('');
    const [uiStructure, setUiStructure] = useState<any>(null);
    const [showModel, setShowModel] = useState(false);
    const [mode, setMode] = useState<'login' | 'showCode' | 'ui'>('login');
    const [uiCode, setUiCode] = useState('');

    const callApi = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch('/api/generate-mockup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ description }),
            });

            setIsLoading(false);
            setDescription('');
            if (!response.ok) {
                console.error(`Failed to generate mockup ${response}`);
                alert(`Failed to generate mockup- ${response} 😣. Please try again later.`);
                return;
            }
            const data = await response.json();
            setUiStructure(data.structure);
            setUiCode(generateJSXFromConfig(data.structure, 0));
            setShowModel(true);
        }
        catch (error) {
            alert(`Failed to generate mockup- ${error} 😣. Please try again later.`);
        }
    };

    return (
        <div>
            <div className="flex flex-col items-center ml-100 gap-4 mt-40">
                <RMGHeader title="Ai Mockup Generator" size="large" color='default'></RMGHeader>
                <form onSubmit={callApi}>
                    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col gap-4">
                        <RMGText text="Enter Text" size='large' weight='bold' className="mr-75"></RMGText>
                        <RMGInput placeholder="Type here" value={description} onChange={(e) => setDescription(e.target.value)}></RMGInput>
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
                <div className="fixed inset-0 flex items-center justify-center z-50" onClick={() => setShowModel(false)} style={{ backgroundColor: 'rgba(83, 80, 80, 0.9)' }}>

                    <RMGButton title='X' color='default' className="absolute top-60.5 left-142 bg-black-500 text-white px-3 py-1 rounded" onClick={() => { setMode('login'); setShowModel(false) }}></RMGButton>

                    <RMGButton title='Show React Code' color='primary' className="absolute top-60.5 left-242 text-white px-3 py-1 rounded" onClick={(e) => { e.stopPropagation(); setMode('showCode'); }}></RMGButton>

                    <RMGButton title='Download' className="absolute top-131 left-143 text-white px-3 py-1 rounded" onClick={(e) => { e.stopPropagation(); downloadCode(`Code_ ${new Date().getDate()}_${new Date().getDay()}_${new Date().getTime()})`, uiCode) }}></RMGButton>

                    <div>
                        {mode === 'login' && (
                            <>
                                <div className="bg-white p-23 rounded-xl shadow-xl w-[650px] text-center space-y-4" onClick={(e) => e.stopPropagation()}>
                                    <h2 className="text-xl font-bold">Login</h2>
                                    <input type="email" placeholder="Email" className="border p-2 w-full rounded" />
                                    <input type="password" placeholder="Password" className="border p-2 w-full rounded" />

                                    <RMGButton title='Login' onClick={() => { if (uiStructure) setMode('ui'); else alert("Not readty---") }} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"></RMGButton>
                                </div>
                            </>
                        )}

                        {mode === 'ui' && (
                            <>
                                <div>
                                    <div className="bg-white p-40 rounded-xl shadow-xl w-[700px] text-center space-y-4" onClick={(e) => e.stopPropagation()}>
                                        {uiStructure ? (
                                            < ComponentFactory config={uiStructure} />
                                        ) : (
                                            <p>Loading UI structure...</p>
                                        )}
                                    </div>
                                </div>
                            </>
                        )}

                        {mode === 'showCode' && (
                            <>
                                <div className="bg-white p-50 rounded-xl shadow-xl w-[700px] text-center " onClick={(e) => e.stopPropagation()}>
                                    <pre className="text-left bg-red-100 p-5 absolute top-82.5 left-152 max-h-[250px] text-sm ">
                                        <code>{uiCode}</code>
                                    </pre>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            }
        </div>)
}






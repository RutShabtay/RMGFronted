import { RMGHeader } from "./components/RMGHeader"
import { RMGText } from "./components/RMGText"
import { RMGButton } from "./components/RMGButton"
import { RMGInput } from "./components/RMGInput"

export const RmgFronted = () => {
    return (
        <div>
            <div className="flex flex-col items-center ml-100 gap-4 mt-40">
                <RMGHeader title="Ai Mockup Generator" size="large" color='default'></RMGHeader>
                <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col gap-4">
                    <RMGText text="Enter Text" size='large' weight='bold' className="mr-75"></RMGText>
                    <RMGInput placeholder="Type here"></RMGInput>
                    <RMGButton title="Generate Mockup" onClick={() => { alert("Button clicked!") }} color="primary" className="transition duration-200 hover:scale-105" />
                </div>
            </div>
        </div>
    )
}

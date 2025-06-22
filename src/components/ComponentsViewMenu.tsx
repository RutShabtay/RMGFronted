import { RMGButton } from "./RMGButton";
import { RMGHeader } from "./RMGHeader";
import { RMGImage } from "./RMGImage";
import { RMGInput } from "./RMGInput";
import { RMGText } from "./RMGText";

export const ComponentsViewMenu = ({ close }: { close: (value: boolean) => void }) => {
    return (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-90 z-50 overflow-auto flex justify-center items-start pt-20 px-4">
            <div className="bg-white p-6 rounded-xl w-full max-w-3xl space-y-6 border border-gray-300 shadow-md">

                <h1 className="text-3xl text-gray-1000 text-center font-semibold mb-4">Components Preview</h1>

                {/* Header */}
                <div className="border border-gray-300 rounded-md p-4 space-y-2">
                    <h2 className="text-xl text-gray-500 font-semibold">Header Component</h2>
                    <RMGHeader title="Example Header" size="large" color="primary" />
                </div>

                {/* Text */}
                <div className="border border-gray-300 rounded-md p-4 space-y-2">
                    <h2 className="text-xl text-gray-500 font-semibold">Text Component</h2>
                    <RMGText text="Regular text" size="medium" />
                    <RMGText text="Small gray text" size="small" color="secondary" />
                    <RMGText text="Bold primary text" size="large" weight="bold" color="primary" />
                </div>

                {/* Button */}
                <div className="border border-gray-300 rounded-md p-4 space-y-2">
                    <h2 className="text-xl text-gray-500 font-semibold">Button Component</h2>
                    <div className="flex gap-3 flex-wrap">
                        <RMGButton title="Default" color="default" />
                        <RMGButton title="Primary" color="primary" />
                        <RMGButton title="Secondary" color="secondary" />
                    </div>
                </div>

                {/* Input */}
                <div className="border border-gray-300 rounded-md p-4 space-y-2">
                    <h2 className="text-xl text-gray-500 font-semibold">Input Component</h2>
                    <RMGInput placeholder="Enter text..." className="border p-2 w-full rounded" />
                </div>

                {/* Image */}
                <div className="border border-gray-300 rounded-md p-4 space-y-2">
                    <h2 className="text-xl text-gray-500 font-semibold">Image Component</h2>
                    <RMGImage
                        src="https://via.placeholder.com/120"
                        alt="Preview"
                        width={120}
                        height={120}
                        rounded={true}
                    />
                </div>

            </div>
            <button onClick={() => close(false)} className="absolute top-25 left-124 text-black-500 hover:text-black-700 font-semibold">
                X
            </button>
        </div>
    );
} 
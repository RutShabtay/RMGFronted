import { useState } from 'react';
import { RMGButton } from './components/RMGButton';
import { RMGHeader } from './components/RMGHeader';
import { RMGInput } from './components/RMGInput';
import { RMGText } from './components/RMGText';
import { RMGImage } from './components/RMGImage';
import './App.css';
import imgg from './assets/imgg.jpg';

export const RenderingTests = () => {
    const [inputValue, setInputValue] = useState('')

    return (
        <div className="p-6 space-y-4">
            <RMGHeader title="Hello Header Rendering Tests 👏👏👏" size='medium' color='primary' />
            <RMGText text="Hello Text Rendering Tests 🎉🎉🎉" size='large' color='primary' weight='bold' />
            <RMGInput placeholder="Insert here your text---👇" onChange={(e) => setInputValue(e.target.value)} />
            <RMGButton title='Click Me' onClick={() => alert('YAY--- I Was Clicked!!!')} />
            <RMGImage src={imgg} alt="example picture" width={100} height={150} />
        </div>
    );
}


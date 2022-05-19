import { useState } from 'react';
import * as C from './styles';

type Props = {
    onEnter: (taskName: string) => void;
}
export const AddArea = ({onEnter}: Props) => {
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: React.KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== ''){
            onEnter(inputText);
            setInputText('');
        }
        
    }
    return (
        <C.Container>
            <div className='img'>➕</div>
            <input
                type="text"
                placeholder='adiciona uma tarefa'
                value={inputText}
                onChange={e=>setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    );

}
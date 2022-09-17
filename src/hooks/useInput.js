import { useState } from 'react';

const useInput = () => {
    const [value, setValue] = useState('');

    const handler = e => {
        setValue(e.target.value);
    };

    const reset = () => {
        setValue('');
    };

    return [value, handler, reset];
};
export default useInput;

import React from 'react';
import {Checkbox} from "../../components/Checkbox/Checkbox";
import {CustomButton} from "../../components/CustomButton/CustomButton";
import CustomInputText from "../../components/CustomInputText/CustomInputText";
import {DebouncedInput} from "../../components/DebouncedInput/DebouncedInput";
import {EditableSpan} from "../../components/EditableSpan/EditableSpan";
import Radio from "../../components/Radio/Radio";
import {Select} from "../../components/Select/Select";

export const ComponentsLibraryPage = () => {

    const arr = [
        { id: 1, value: 'x' },
        { id: 2, value: 'y' },
        { id: 3, value: 'z' },
    ]
    return (
        <div>
            <Checkbox/>
            <CustomButton/>
            <CustomInputText/>
            <DebouncedInput/>
            <EditableSpan value={"that text is not working"}/>
            <Radio options={arr}/>
            <Select options={arr}/>
        </div>
    );
}

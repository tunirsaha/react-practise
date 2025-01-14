import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import { ASSETS } from '../models/asset.model'

interface Props {
    assetType: typeof ASSETS[keyof typeof ASSETS];
    submitInputForm: (assetType: typeof ASSETS[keyof typeof ASSETS], inputText: string) => void
}

const AssetCreateForm = ({ assetType, submitInputForm }: Props) => {
    const [input, setInputText] = useState<string>('')
    const handleButtonClick = () => submitInputForm(assetType, input)

    return (
        <>
            <div className="mb-2">Creating a {assetType}</div>
            <Input value={setInputText} />
            <Button text={'Create'} buttonClicked={handleButtonClick} />
        </>
    )
}

export default AssetCreateForm

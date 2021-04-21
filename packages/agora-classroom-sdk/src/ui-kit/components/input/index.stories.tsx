import React, { useState } from 'react'
import { Meta } from '@storybook/react'
import { Input, Search } from '~components/input'
import { Icon } from '~components/icon'
import { Button } from '~components/button'


const meta: Meta = {
    title: 'Components/Input',
    component: Input,
};

export const Docs = () => {
    const [input0, setInput0] = useState('')
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [input3, setInput3] = useState('')
    const [input4, setInput4] = useState('')
    return (
        <>
            <h1>Input 组件</h1>
            <div className="mt-4">
                <Input
                    value={input0}
                    onChange={e => {
                        setInput0(e.target.value)
                    }}
                    placeholder='这个是最普通的input'
                />
            </div>
            <div className="mt-4">
                <Input
                    placeholder='前置是纯文本的placeholder'
                    prefix={<span style={{ color: '#333' }}>纯文本</span>}
                    value={input1}
                    onChange={e => {
                        setInput1(e.target.value)
                    }}
                />
            </div>
            <div className="mt-4">
                <Input
                    placeholder='前置是icon的placeholder'
                    prefix={<Icon type="pen" color="skyblue" />}
                    value={input2}
                    onChange={e => {
                        setInput2(e.target.value)
                    }}
                />
            </div>
            <div className="mt-4">
                <Input
                    placeholder='这个是有后置的placeholder'
                    value={input3}
                    onChange={e => {
                        setInput3(e.target.value)
                    }}
                    suffix={<Button>Button</Button>}
                />
            </div>
            <div className="mt-4">
                <Input
                    placeholder='这个是前后都有ReactNode的placeholder'
                    value={input4}
                    onChange={e => {
                        setInput4(e.target.value)
                    }}
                    prefix={<Icon type="hand" />}
                    suffix={<Icon type="eraser" />}
                />
            </div>
            <h1 className="mt-4">Search 组件</h1>
            <div className="mt-4">
                <Search
                    onSearch={value => console.log(value)}
                    placeholder={'search的placeholder'}
                />
            </div>
        </>
    )
}

export default meta
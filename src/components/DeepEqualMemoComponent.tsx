import React, {FC} from 'react';
import {Obj} from "../App";

interface Props {
    trigger: number
    obj: Obj
}

const DeepEqualMemoComponent: FC<Props> = React.memo(({trigger, obj}) => {
    const startTime = performance.now()

    for (let i=0; i < 10000; i++) {
        // 16桁の文字列を乱数生成
        const S="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        const N=16
        Array.from(Array(N)).map(()=>S[Math.floor(Math.random()*S.length)]).join('')
    }

    const endTime = performance.now()

    console.log(`Deep Equal Memo: ${endTime - startTime} milliseconds`)

    return (
        <div>Deep Equal Memo Component: {trigger}</div>
    )
}, (prevProps: Props, nextProps: Props) => {
    const prevDeepTrigger = prevProps.obj.deepTrigger
    const nextDeepTrigger = nextProps.obj.deepTrigger
    return (prevDeepTrigger === nextDeepTrigger)
})

export default DeepEqualMemoComponent;

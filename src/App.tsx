import React, {FC, useState} from 'react';
import {SfcChild, MemoChild, DeepEqualMemoChild} from "./components";

export interface Obj {
  deepTrigger: number
}

const App: FC = () => {
  const [sfcTrigger, setSfcTrigger] = useState<number>(0)
  const [memoTrigger, setMemoTrigger] = useState<number>(0)
  const [obj, setObject] = useState<Obj>({deepTrigger: 0})

  const countUpSfc = () => {
    setSfcTrigger(prevState => prevState + 1)
  }

  const countUpMemo = () => {
    setMemoTrigger(prevState => prevState + 1)
  }

  const countUpDeepTrigger = () => {
    setObject(prevState => {
      return {deepTrigger: prevState.deepTrigger + 1}
    })
  }

  return (
      <div>
        <h2>React Memo Test</h2>
        <button onClick={countUpSfc}>SFC</button>
        <button onClick={countUpMemo}>Memo</button>
        <button onClick={countUpDeepTrigger}>Deep Equal Memo</button>

        <SfcChild trigger={sfcTrigger} />
        <MemoChild trigger={memoTrigger} />
        <DeepEqualMemoChild trigger={memoTrigger} obj={obj}/>
      </div>
  );
};

export default App;

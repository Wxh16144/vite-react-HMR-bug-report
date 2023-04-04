import * as React from 'react'
import TestChild from './Child'
import styles from './style.module.less'

const comps: Record<string, React.FC> = {
  child: TestChild
}

const Test: React.FC = () => {
  const [matchName] = React.useState('child')

  const calcComp = React.useMemo(
    () => comps[matchName],
    [matchName]
  )

  return (
    <>
      <h1 className={styles.test}>Test Components</h1>
      <br />
      <hr />
      <br />
      {
        calcComp?.({ children: () => 1 })
      }
    </>
  )
}

export default Test;
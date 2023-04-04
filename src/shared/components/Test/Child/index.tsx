import * as React from 'react'
import styles from './style.module.less'

interface TestChildProps {
  children?: React.FC<{ time: string | number }>
}

const TestChild: React.FC<TestChildProps> = (props) => {

  const {
    children = () => <>default time</>
  } = props

  const [time, updateTime] = React.useState('')
  return (
    <div>
      <button
        type="button"
        onClick={() => updateTime(Date.toString())}
      >
        update time
      </button>
      <h2
        className={styles.testChild}
      >
        TestChild time: {children({ time })}
      </h2>
    </div>
  )
}

export default TestChild;
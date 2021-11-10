# Container component template

```ts
import React, { FunctionComponent } from 'react'
import cn from 'classnames'
import { makeStyles } from '@material-ui/core'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

interface Props {
  className?: string
  rest: []
}

const useStyles = makeStyles(theme => ({
  root: {},
}))

const Component: FunctionComponent<Props> = ({ className, ...rest }) => {
  const styles = useStyles()

  return <div className={cn(styles.root, className)} {...rest}></div>
}

Component.defaultProps = {
  className: '',
  rest: [],
}

const mapStateToProps = state => ({})

const mapDispatchToProps = bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Component)
```

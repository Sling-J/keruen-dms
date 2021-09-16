import React from 'react'
import errorHandler from 'src/settings/errorHandler'

type ErrorBoundaryState = {
  hasError: boolean
}

class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  static getDerivedStateFromError() {
    return {
      hasError: true
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error) {
    errorHandler.report(error)
  }

  render() {
    if (this.state.hasError) {
      // Можно отрендерить запасной UI произвольного вида
      // return <Placeholder />
      return (
        <div>
          Error
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

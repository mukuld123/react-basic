import React, { Component } from 'react'
import styles from './appstyle.module.css'

class StyleElements extends Component {
  render() {
    return (
      <div>
        <div className={styles.parentt} >Hello there</div>
      </div>
    )
  }
}

export default StyleElements
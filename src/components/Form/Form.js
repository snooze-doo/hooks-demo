import React from 'react'
import Row from '../Row/Row'
import './Form.scss';

export default class Form extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      name: '',
      favoriteMovie: '',
      cursorPosition: { x: 0, y: 0 },
    }
    this.updateName = this.updateName.bind(this)
    this.updateFavoriteMovie = this.updateFavoriteMovie.bind(this)
    this.updateCursorPosition = this.updateCursorPosition.bind(this)
  }

  componentDidMount() {
    this.updateDocumentTitle()
    document.addEventListener('mousemove', this.updateCursorPosition)
  }

  componentDidUpdate() {
    this.updateDocumentTitle()
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.updateCursorPosition)
  }

  updateCursorPosition(e) {
    this.setState({ cursorPosition: { x: e.x, y: e.y } })
  }

  updateDocumentTitle() {
    document.title = this.state.name + ' likes ' + this.state.favoriteMovie
  }

  updateName(e) {
    this.setState({ name: e.target.value })
  }

  updateFavoriteMovie(e) {
    this.setState({ favoriteMovie: e.target.value })
  }

  render() {
    return (
      <section className='form'>
        <Row title='Name'>
          <input type='text' value={this.state.name} onChange={this.updateName} />
        </Row>
        <Row title='Favorite Movie'>
          <input type='text' value={this.state.favoriteMovie} onChange={this.updateFavoriteMovie} />
        </Row>
        <Row title='Cursor Position'>
          <span className='coord'>{`X: ${this.state.cursorPosition.x}`}</span>
          <span className='coord'>{`Y: ${this.state.cursorPosition.y}`}</span>
        </Row>
      </section>
    )
  }
}

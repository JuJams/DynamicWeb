import {useSelector, useDispatch} from 'react-redux'
import {createSelector} from '@reduxjs/toolkit'
import {removeArt} from '../store'

const memoizedArt = createSelector(
  [(state) => state.art.data, (state) => state.art.searchTerm],
  (data, searchTerm) =>
    data.filter((art) =>
      art.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
)

const ArtList = () => {
  const dispatch = useDispatch()

  const artList = useSelector(memoizedArt)
  const name = useSelector((state) => state.form.name)

  const handleArtDelete = (art) => {
    dispatch(removeArt(art.id))
  }

  const renderedArt = artList.map((art) => {
    const bold = name && art.name.toLowerCase().includes(name.toLowerCase())

    return (
      <div
        key={art.id}
        className="border rounded flex flex-row justify-between items-center"
      >
        <p className={`${bold && 'font-bold'}`}>
          {art.name} - ${art.price}
        </p>
        <button
          onClick={() => handleArtDelete(art)}
          className="rounded bg-red-500 p-2 text-white"
        >
          Delete
        </button>
      </div>
    )
  })
  return <div>{renderedArt}</div>
}

export default ArtList

import './ImportExport.sass'

function ImportExport({saveFileURL, player, readFile}) {

  return (
    <div className='import-export-block'>
        <a href={saveFileURL} download={player.name}>Save data</a>
        <label htmlFor='save-file-upload'>Load data</label>
        <input id='save-file-upload' type='file' onChange={e => readFile(e)} onClick={e => e.target.value = null}/>
    </div>
  )
}

export default ImportExport
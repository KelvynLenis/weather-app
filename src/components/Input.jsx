import './input.css'
import { FiSearch } from 'react-icons/fi';

const Input = ({text, submit, func}) => {
  return (
    <div>
      <form className="input" onSubmit={submit}>
        <input type="text" placeholder="Please enter location" className='input_value' onChange={text} />
        <span className='input_icon' onClick={func}>
          <FiSearch />
        </span>
      </form>
    </div>
  )
}

export default Input
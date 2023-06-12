
import React from "react";
import './../styles/App.css';
import {useSelector,useDispatch} from 'react-redux';
import { useEffect } from "react";
import { apiSuccess, fetchApi } from "../redux/actions/apiFetchAction";

const App = () => {
  useEffect(()=>{
    console.log('inside useEffect')
    dispatch(fetchApi())
    data.sort((a,b)=>(a.title < b.title) ? -1 : ((b.title > a.title) ? 1 : 0));
  },[]);

  let loading = useSelector((state) => state.loading);
  let data = useSelector((state) => state.data);
  let error = useSelector((state) => state.error);
  let dispatch = useDispatch();

  
  if(loading) return <h1>The data is loading</h1>
  if(error) return <h1>{error}</h1>

  let sorting = (type) => {
    switch(type)
    {
      case 'title':
        data.sort((a,b)=>(a.title < b.title) ? -1 : ((b.title > a.title) ? 1 : 0));
        break;
      case 'authors':
        data.sort((a,b)=>(a.authors < b.authors) ? -1 : ((b.authors > a.authors) ? 1 : 0));
        break;
      default:
        break;
    }
     console.log('sorteddata',data);
  }


  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Books List</h1>
        <table>
        {data.map((book)=>{
          return (
            <tbody key={book.id}>
              <tr>
              <th>{book.title}</th>
              <td>{book.authors}</td>
              <td>{book.url}</td>
            </tr>
            </tbody>
          )
        })}
        </table>
        <label>sort by</label>
        <select>
          <option onSelect={()=>sorting('title')}>title</option>
          <option onSelect={()=>sorting('authors')}>authors</option>
        </select>
    </div>
  )
}

export default App

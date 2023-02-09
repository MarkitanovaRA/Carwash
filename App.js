import React,{useState} from 'react'
import LogIn from './components/LogIn';
import Modal from './components/Modal';
import PostList from './components/PostList';
import data from './data.json'



import './styles/App.css';

function App() {

  const WashList=data;
  const [modalActive, setModalActive]=useState(false);

  const [selectObjectId, setSelectObjectId]=useState(null);
  const handleObjectClick=id=>{
    setSelectObjectId(id);
  };
  return (
    <div className="App">
        
      {/*<LogIn/>*/}
      <PostList posts={WashList} title="Список автомоек" active={modalActive} setActive={setModalActive} 
      SelectedId={handleObjectClick}/>
      <Modal active={modalActive} setActive={setModalActive} id={selectObjectId}/>
    </div>
    
  );
}

export default App;

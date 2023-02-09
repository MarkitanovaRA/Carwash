import React from 'react'


const PostItem = (props) => {
      
   return (
    <div className='post' onClick={()=> props.setActive(true)} id={props.post.id}>
      <div onClick={()=>props.SelectedId(props.post.id)}>
      
          <div className='post__content' >
                  <strong> {props.post.title}</strong>
                  <strong>{props.post.distance} км </strong> 
          </div>

          <div className="description">
                {props.post.description}
          </div>
          
            
      </div>
    </div>
    
          
   )

};
export default PostItem;



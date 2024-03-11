import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.style.scss";


const Directory = ({categories}) =>{
    
    return(
        <div className="directory-container">
        {categories.map((category) => (
          <DirectoryItem category={category}/>
        ))}
      </div>
    );
}

export default Directory;
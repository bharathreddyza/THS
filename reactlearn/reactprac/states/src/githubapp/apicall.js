import React from 'react'
import axios from 'axios'
import fetchPopularRepos from './Api'
import Loader from 'react-loader-spinner'
import PropTypes from 'prop-types';

const  Header=(props)=>{
    const languages = ['All',"Javascript","Python",'Jave']
    const {selectLangauge,updateLanguage} = props
    return(
    <div>
    {languages.map((language)=>(
        <li key={language} 
          onClick={()=>updateLanguage(language)}
          style={selectLangauge == language ? {color:'blue'}:null}
         > {language}</li>
    ))}
     </div>
    )
}

const UsersBody=(props)=>{
    const {data} = props
    return(
        <div style={{display:'grid' , gridTemplateColumns:"repeat(3,1fr)" , marginTop:'10px'}}>
      {data.length <=0 ? <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      /> :
        data.map((language)=>(
            <div>  
            <h1>{language.name}</h1>
            <img src={language.owner.avatar_url} />
             </div>
            
        ))
      }
        </div>
    )
}
 
UsersBody.propTypes={
    data: PropTypes.array.isRequired

}

Header.propTypes={
    selectLangauge:PropTypes.string.isRequired,
    updateLanguage:PropTypes.func.isRequired
}

class App3 extends React.Component{
   constructor(props){
       super(props)
       this.state ={
           selectLanguage:'All',
           data:[]
       }
   }

   



    componentDidMount() {
       this.updateLanguage(this.state.selectLanguage)
   
   }
 updateLanguage = (language) =>{
    this.setState({
        selectLanguage:language
    })
    fetchPopularRepos(language)
    .then((data)=>this.setState({
        data:data
    }))
}

  
    render(){
        return(
            <div>
             <Header updateLanguage={this.updateLanguage}
                     selectLangauge={this.state.selectLanguage}
             />
            <UsersBody
                data={this.state.data}
            /> 
             </div>
        )
    }
}

export default App3
//  fetch(`https://api.edamam.com/search?q=${this.state.query}&app_id=${'b81a4636'}&app_key=${'449b56cb1927316dd70bbf2487e395fa'}`)

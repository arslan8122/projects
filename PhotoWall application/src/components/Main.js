import React,{Component} from 'react';
import PhotoWall from './PhotoWall';
import AddPhots from './AddPhoto';
import {Route} from 'react-router-dom';
import {removePost} from '../redux/actions';
import Title from './Title'
import Single from './Single';



class Main extends Component{
   constructor(){
        super()
        this.state={
             posts : [],
             screen :'photos'
        }
            this.removephoto=this.removephoto.bind(this);
            this.navigate=this.navigate.bind(this);
   } 
   navigate(){
       this.setState({
           screen: 'Addphoto'
       })
   }
   addphoto(postsubmitted){
       this.setState(state=>({
            posts:state.posts.concat([postsubmitted])
       }))
   }

   removephoto(postRemoved){
       console.log(postRemoved.description)
       this.setState((state)=>({
            posts:state.posts.filter(post=> post !== postRemoved)
       }))
   }
    componentDidMount(){
        // const post=fetchfromDatabase();
        // this.setState({
        //     posts:post
        // })
        // this.props.removePost(1)
    }

    render(){
        
      return( 
            <div>
            <Route exact path="/" render={()=>(
            <div>
            <Title />
            <PhotoWall  {...this.props} />
            </div>


            )} />
         {/* {  this.state.screen=== 'photos' &&( */}
          
         {/* )} */}
        
        {/* {this.state.screen=== 'Addphoto' && ( */}
        
        <div>
            <Route path='/Addphoto' render={({history})=>(
                <AddPhots {...this.props} onHistory={history}/>

            )}/>
            
        </div>
        <Route path='/single/:id' render={(params)=>(
            <Single {...this.props} {...params}/>
        )}></Route>
        {/* )} */}
      </div>
  
      )}
  
}

function fetchfromDatabase(){
return [{
    // id: 0,
    // description: "beautiful landscape",
    // imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
    // "3919321_1443393332_n.jpg"
    // }, {
    // id: 1,
    // description: "Aliens???",
    // imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
    // "08323785_735653395_n.jpg"
    // }, {
    // id: 2,
    // description: "On a vacation!",
    // imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
    // 
}]
}


export default Main;
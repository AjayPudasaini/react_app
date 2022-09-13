import axios from "axios";
import { Component } from "react";

class CourseUpdate extends Component{
    state = {

        courseTitle : "",
        courseDesc : "", 
        courseThumbnail : "",
        courseVideo : "",
        coursePrice : 0,

        id:this.props.match.params.id,

        success:false,

        config : {
            headers : {'authorization' : `Bearer ${localStorage.getItem('token')}`}
        }

    }


    componentDidMount(){
        axios.get("http://localhost:1337/course/" + this.state.id, this.state.config)
        .then((response)=>{
            this.setState({
                courseTitle:response.data.courseTitle,
                courseDesc:response.data.courseDesc,
                courseThumbnail:response.data.courseThumbnail,
                courseVideo:response.data.courseVideo,
                coursePrice:response.data.coursePrice

            })

        
        }).catch((err)=>{
            console.log(err.response)
        })
    }



    UpdateCourse = (e)=>{
        e.preventDefault()

        const data = new FormData() 

        data.append('courseTitle', this.state.courseTitle)
        data.append('courseDesc', this.state.courseDesc)
        data.append('courseThumbnail', this.state.courseThumbnail)
        data.append('courseVideo', this.state.courseVideo)
        data.append('coursePrice', this.state.coursePrice)
        
        axios.put('http://localhost:1337/course/update/' + this.state.id,  data, this.state.config)
        .then((response)=>{
            console.log('course update response',response)
            this.setState({ 
                courseTitle: "",
                courseDesc: "",
                courseThumbnail: "",
                courseVideo: "",
                coursePrice: "",
            })

            // toast(response.data.message)
        })
        .catch((err)=>{
            console.log(err.response.data)
        })
    }



    courseThumbnailUpload = (e)=>{
        this.setState({
            courseThumbnail : e.target.files[0]
        })
    }

    courseVideoUpload = (e)=>{
        this.setState({
            courseVideo : e.target.files[0]
        })
    }




    render()
    {
        return(
            <div>
                <div className="container p-5">
                    <div className="mx-auto mt-5">
                        <div className="container border rounded bg-white p-2">
                            <form>
                                <fieldset className="form-group">
                                    <legend className="border-bottom mb-4">Update Course</legend>


                                    <div className="form-group mb-3">
                                        <label class="form-label">Course Title</label>
                                        <input type="text" name="courseTitle" className="form-control" value={this.state.courseTitle} onChange={(event)=>{this.setState({courseTitle:event.target.value})}} placeholder="Enter Course Title" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label class="form-label">Course Desctiption</label>
                                        <textarea name="courseDesc" className="form-control" value={this.state.courseDesc} onChange={(event)=>{this.setState({courseDesc:event.target.value})}} placeholder="Course descreption "/>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label class="form-label">Course Price</label>
                                        <input type="Number" name="coursePrice" className="form-control" value={this.state.coursePrice} onChange={(event)=>{this.setState({coursePrice:event.target.value})}} placeholder="Course price " />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label class="form-label">Course Thumbnail</label><br></br>
                                        <input type="file" name="courseThumbnail" className="form-control" accept="image/x-png,image/gif,image/jpeg" value={this.state.courseThumbnail.path}  onChange={this.courseThumbnailUpload} />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label class="form-label">Course Video</label><br></br>
                                        <input type="file" name="courseVideo" className="form-control" accept="video/mp4,video/x-m4v,video/mkv" value={this.state.courseVideo.path} onChange={this.courseVideoUpload} />
                                    </div>


                                </fieldset>
                                <div className="form-group d-grid mb-3">
                                    <button type="submit" onClick={this.UpdateCourse} className="btn btn-outline-info btn-lg">Save</button>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseUpdate
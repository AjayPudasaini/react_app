import { Component } from "react";
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class CourseUpload extends Component{
    state = {
        courseTitle : "",
        courseDesc : "", 
        courseThumbnail : "",
        courseVideo : "",
        coursePrice : 0,

        success:false,

        config : {
            headers : {'authorization' : `Bearer ${localStorage.getItem('token')}`}
        }

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

    



    sendCourseData = (e) =>
    {
        e.preventDefault()

        const data = new FormData() 

        data.append('courseTitle', this.state.courseTitle)
        data.append('courseDesc', this.state.courseDesc)
        data.append('courseThumbnail', this.state.courseThumbnail)
        data.append('courseVideo', this.state.courseVideo)
        data.append('coursePrice', this.state.coursePrice)


        axios.post("http://localhost:1337/course/upload", data, this.state.config)
        .then((response)=>
            {
                console.log(response)
                console.log(this.state.courseTitle)
                this.setState({
                    success:true

                })


                console.log('video uploading',this.state.courseVideo);

            }).catch((err)=>
            {
                console.log(err.response)
            })
    }


    render()
    {
        if(this.state.success===true)
        {
            return <Redirect to='/'/>
        }
        return(
            <div CourseUpload="container p-5">

                <div className="mx-auto mt-5">
                    <div className="container border rounded bg-white p-2">
                        <form>
                            <fieldset className="form-group">
                                <legend className="border-bottom mb-4">Upload Course</legend>


                                <div className="form-group mb-3">
                                    <label class="form-label">Course Title</label>
                                    <input type="text" name="courseTitle" className="form-control" value={this.state.courseTitle} onChange={(event)=>{this.setState({courseTitle:event.target.value})}} placeholder="Enter Course Title" required />
                                </div>
                                <div className="form-group mb-3">
                                    <label class="form-label">Course Desctiption</label>
                                    <textarea name="courseDesc" className="form-control" value={this.state.courseDesc} onChange={(event)=>{this.setState({courseDesc:event.target.value})}} placeholder="Course descreption " required />
                                </div>

                                <div className="form-group mb-3">
                                    <label class="form-label">Course Price</label>
                                    <input type="Number" name="coursePrice" className="form-control" value={this.state.coursePrice} onChange={(event)=>{this.setState({coursePrice:event.target.value})}} placeholder="Course price " required />
                                </div>

                                <div className="form-group mb-3">
                                    <label class="form-label">Course Thumbnail</label>
                                    <input type="file" name="courseThumbnail" className="form-control" accept="image/x-png,image/gif,image/jpeg"  onChange={this.courseThumbnailUpload} required />
                                </div>

                                <div className="form-group mb-3">
                                    <label class="form-label">Course Video</label>
                                    <input type="file" name="courseVideo" accept="video/mp4,video/x-m4v,video/mkv" className="form-control" onChange={this.courseVideoUpload} />
                                </div>


                            </fieldset>
                            <div className="form-group d-grid mb-3">
                                <button type="submit" onClick={this.sendCourseData} className="btn btn-outline-info btn-lg">Save</button>
                            </div>

                        </form>

                    </div>
                </div>

            </div>
        )
    }
}

export default CourseUpload
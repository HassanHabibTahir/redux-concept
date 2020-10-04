import React, { Component } from 'react';

class MulterPractice extends Component {


    state = {
        Selectfile: null,
    }

    onSubmit = (event) => {
        event.preventDefault()
        const data = new FormData()
        data.append('file', this.state.selectedFile)

        console.log(data)
    }

    onChangeHandler = (event) => {
      
        console.log(event.target.files[0])
        this.setState({
            Selectfile: event.target.files[0]
        })
    }


    render() {
        return (

            <div>
               


                <form onSubmit={this.onSubmit} >

                    <input type="file" name="file" onChange={this.onChangeHandler} />
                    <button type="submit" >submit</button>
                </form>



            </div>
        )
    }




}
export default MulterPractice;




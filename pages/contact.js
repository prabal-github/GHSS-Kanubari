import React from 'react'
import Script from 'next/script'


const contact = () => {
    return (
        <>
            <div className="container">
                {/* <!-- Trigger the modal with a button --> */}
                {/* <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => $('#myModal').modal('show')}
                >
                    Contact Us
                </button> */}
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                    Open modal
                </button>

                {/* <!-- The Modal --> */}
                <div className="modal modal-xl" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            {/* <!-- Modal Header --> */}
                            <div className="modal-header">
                                <h4 className="modal-title">Feel free to tell us about your experience</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            {/* <!-- Modal body --> */}
                            <form>
                                <div className="mb-3">
                                    <label for="sender-name" className="col-form-label">Sender:</label>
                                    <input type="text" className="form-control" id="sender-name" />
                                </div>
                                <div className="mb-3">
                                    <label for="message-text" className="col-form-label">Message:</label>
                                    <textarea className="form-control" id="message-text"></textarea>
                                </div>
                            </form>

                            {/* <!-- Modal footer --> */}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Send message</button>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default contact
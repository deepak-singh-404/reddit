import React from 'react'

const Loader = () => {
    return (
        <div class="row justify-content-center">
            <div class="col-md-1">
                {
                    <div class="spinner-border text-primary" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Loader

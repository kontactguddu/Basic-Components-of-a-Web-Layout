import React from "react";


export default function Modal(){
    return (
        <div>
            <section>

<button id="modal-btn" class="button">Click Here</button>

<div id="my-modal" class="modal">
<div class="modal-content">
<div class="modal-header">
<span class="close">&times;</span>
<h2>Modal Header</h2>
</div>
<div class="modal-body">
<p class="sub-heading">This is the sub heading of modal</p>

<p class="sub-heading-details">Whether you're building for
Android handsets, Wear OS by Google, Android TV,
Android Auto, or Android Things, this section provides
 the guides and API reference you need.</p>

<button class="learn-more-btn">Learn More</button>
</div>



<div class="modal-footer">
<h3>Modal Footer</h3>
</div>
</div>
</div>


</section>
        </div>
    )
}
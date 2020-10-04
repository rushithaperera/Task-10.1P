import React from 'react';
import './taskType.css'


function Decision(){
    return(
    <div className = "decision">
        <form class="ui form">
            <h4>Question</h4>
            <div class="field">
                <div class="ui radio checkbox"><input type="checkbox" name="checkboxRadioGroup" />
            <label style = {{marginLeft: 15}}>True</label></div></div>

            <div class="field">
                <div class="ui radio checkbox"><input type="checkbox" />
            <label style = {{marginLeft: 15}}>False</label>
            </div></div>
        </form>
    </div>
    )
}

export default Decision

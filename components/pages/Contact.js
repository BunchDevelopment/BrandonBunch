export default (state) =>`
<hr>
<div>
<h2 class="pageHeader container justify-content-center animated fadeInLeft">${state.title}</h2>     
</div>
<div id="centerForm">
<form action="//formspree.io/brandon_bunch@icloud.com" method="POST">
    <div>
    <label>
        <input type="text" placeholder="First Name" name="firstname" />
    </label>
    <label>
        <input type="text" placeholder="Last Name" name="lastname" />
    </label>
    <br>
    <label>
        <input type="email" placeholder="mail@example.com" name="email" />
    </label>
    </div>
    <div class="messageForm">
        <label for="marketing">How did you find my site?</label>
            <select name="marketing">
                <optgroup label="Online">
                    <option value="social">Social Media (FB, Twitter, LinkedIn)</option>
                    <option value="github">Online Portfolio (GitHub)</option>
                    <option value="search">Search Engine</option>
                    <option value="email">Email</option>
                </optgroup>                  
                <optgroup label="In-Person">
                    <option value="networking">We met at a networking event</option>
                    <option value="referral">Personal referral</option>
                    <option value="random">We met somewhere else</option>
                </optgroup>
            <option value="other">Other</option>
        </select>
    <div>
        <input type="radio" name="subject" value="personal" id="personal" />
        <label for="personal">Personal message</label>
        <input type="radio" name="subject" value="professional" id="professional" />
        <label for="personal">Professional message</label>
    </div>
        <div>
            <textarea name="user_message" rows="8" cols="40" max-length="500" placeholder="Leave me a comment!"></textarea>
        </div> 
    </div>
    <input type="submit" />
</form>
</div>
`;

export default function contact() {
    return `
<div id="greeting">
        
</div>


<i class="fab fa-linkedin"></i>
<br>

<form action="//formspree.io/brandon_bunch@icloud.com" method="POST">
    <div>
        <input type="text" placeholder="First Name" name="firstname" />
        <br>
        <input type="text" placeholder="Last Name" name="lastname" />
        <br>
        <input type="email" placeholder="mail@example.com" name="email" />
        <br>
        <input type="submit" />
    </div>
    <div>
        <input type="radio" name="subject" value="personal" id="personal" />
        <label for="personal">Personal message</label>
        <input type="radio" name="subject" value="professional" id="professional" />
        <label for="personal">Professional message</label>
    </div>
    <div>
        <input type="checkbox" name="opt-in-daily" value="opt-in-daily" checked /> Send me daily email updates!!
        <input type="checkbox" name="opt-in-weekly" value="opt-in-weekly" /> Send me weekley email updates! 
    </div>
    <div>
        <label for="marketing">How did you hear about me?</label>
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
            <textarea name="user_message" rows="8" cols="40" maxlength="500" placeholder="Leave me a comment!"></textarea>
        </div> 
    </div>
</form>
`};
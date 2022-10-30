import './Style.css';
function Form () {
  function validateForm()
  {
        var fn = document.forms["form"]["Name"].value;
        var ln = document.forms["form"]["class"].value;
        var gn = document.forms["form"]["gender"];
        var db = document.forms["form"]["dob"].value;
        console.log(fn, ln, gn, db);
        if (fn == null || fn == "") {
          alert("name cannot be blank");
          return false;
        }
        else if (ln == null || ln == "") {
          alert("class cannot be blank");
          return false;
        }
        else if (gn?.value != "on") {
          alert("please enter your gender");
          return false;
        }
        else if (db == null || db == "") {
          alert("enter your dob");
          return false;
        }
        else {
          alert("success!")
        }
      
  }
  return (
    <div class="container-fluid">
    <div class="row justify-content-start ">
    <div class="col-md-12">
    <h1 style={{textAlign:" center;"}}>STUDENT FORM</h1>
    
      <form id="form" onSubmit={validateForm}>
        <label for="a1">Name</label>
        <input type="text" name="Name" id="a1"/><br/><br/>
        <label for="class">Class</label>
        <select name="" id="class" >
          <option>select an option</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select><br/><br/>
        <label for="">Gender</label>
        <input type="radio" id="male" name="gender"/>
        <label for="male">male</label>
        <input type="radio" id="female" name="gender"/>
        <label for="female">female</label><br/><br/>
        <label for="">DOB</label>
        <input type="date" name="dob" id=""/><br/><br/>
        <button type="submit">Submit</button>
        <button>Reset</button>
        </form>
        </div>
        </div>
        </div>
        


  );
}
export default Form;

<form action="" method="post">
    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <label for="inputFirstName">First Name</label>
          <input type="text" class="form-control" id="inputFirstName" required="">
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label for="inputLastName">Last Name</label>
          <input type="text" class="form-control" id="inputLastName" required="">
        </div>
      </div>
    </div>            
    <div class="form-group">
      <label for="inputEmail">Email Address</label>
      <input type="email" class="form-control" id="inputEmail" required="">
    </div>
    <div class="form-group">
      <label for="inputMessage">Message</label>
      <textarea class="form-control" id="inputMessage" rows="5" required=""></textarea>
    </div>
    <div class="d-grid gap-2">
    <input type="submit" class="btn btn-outline-primary btn-block" value="Submit">
    </div>
</form>

<style>
    .form-group{
        padding: 8px 0px;
    }
</style>
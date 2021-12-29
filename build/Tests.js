var pagenumber = pm.environment.get("PageNum");
pm.environment.set("PageNum", pagenumber + 1);
postman.setNextRequest("Newman_Get_Request");
if (pagenumber > 1000) {
  postman.setNextRequest(null);
}

var pagenumber = pm.environment.get("PageNum");
if (!pagenumber) {
  pm.environment.set("PageNum", 1);
}

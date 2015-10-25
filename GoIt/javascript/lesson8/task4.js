function Article() {
  this.created = new Date();
  Article.count++;
  Article.date = this.created;
}
Article.count = 0;

Article.showStats = function(){
  console.log(Article.count +" " + Article.date);
}
new Article();
new Article();

Article.showStats(); 

new Article();

Article.showStats();
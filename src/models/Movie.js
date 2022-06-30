export class Movie {
  imgFront;
  title;
  viewed;
  tags;
  constructor (imgFront, title , viewed, tags ){
    this.imgFront = imgFront || false
    this.title = title || false
    this.viewed = viewed || false
    this.tags = tags || []

  }
}
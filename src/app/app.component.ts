import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  checkWindowIndex(index: number){
    return Math.abs(this.currentPage-index) <5;
  }


  images=[
    {
      title:'The Beach',
      url:'https://cdn.pixabay.com/photo/2020/06/30/23/21/sunset-5357877_960_720.jpg',
    },
    {
      title:'Downtown Road',
      url:'https://cdn.pixabay.com/photo/2021/05/08/11/24/city-6238228_960_720.jpg',
    },
    {
      title:'The Forest',
      url:'https://cdn.pixabay.com/photo/2021/06/25/23/27/forest-6364913_960_720.jpg',
    },
    {
      title:'Mountain and the Sea',
      url:'https://cdn.pixabay.com/photo/2021/05/25/12/59/mountain-6282389_960_720.jpg',
    },
    {
      title:'The Beach',
      url:'https://cdn.pixabay.com/photo/2020/06/30/23/21/sunset-5357877_960_720.jpg',
    },
    {
      title:'Downtown Road',
      url:'https://cdn.pixabay.com/photo/2021/05/08/11/24/city-6238228_960_720.jpg',
    },
    {
      title:'The Forest',
      url:'https://cdn.pixabay.com/photo/2021/06/25/23/27/forest-6364913_960_720.jpg',
    },
    {
      title:'Mountain and the Sea',
      url:'https://cdn.pixabay.com/photo/2021/05/25/12/59/mountain-6282389_960_720.jpg',
    },
    {
      title:'The Beach',
      url:'https://cdn.pixabay.com/photo/2020/06/30/23/21/sunset-5357877_960_720.jpg',
    },
    {
      title:'Downtown Road',
      url:'https://cdn.pixabay.com/photo/2021/05/08/11/24/city-6238228_960_720.jpg',
    },
    {
      title:'The Forest',
      url:'https://cdn.pixabay.com/photo/2021/06/25/23/27/forest-6364913_960_720.jpg',
    },
    {
      title:'Mountain and the Sea',
      url:'https://cdn.pixabay.com/photo/2021/05/25/12/59/mountain-6282389_960_720.jpg',
    },
    {
      title:'The Beach',
      url:'https://cdn.pixabay.com/photo/2020/06/30/23/21/sunset-5357877_960_720.jpg',
    },
    {
      title:'Downtown Road',
      url:'https://cdn.pixabay.com/photo/2021/05/08/11/24/city-6238228_960_720.jpg',
    },
    {
      title:'The Forest',
      url:'https://cdn.pixabay.com/photo/2021/06/25/23/27/forest-6364913_960_720.jpg',
    },
    {
      title:'Mountain and the Sea',
      url:'https://cdn.pixabay.com/photo/2021/05/25/12/59/mountain-6282389_960_720.jpg',
    },
    {
      title:'The Beach',
      url:'https://cdn.pixabay.com/photo/2020/06/30/23/21/sunset-5357877_960_720.jpg',
    },
    {
      title:'Downtown Road',
      url:'https://cdn.pixabay.com/photo/2021/05/08/11/24/city-6238228_960_720.jpg',
    },
    {
      title:'The Forest',
      url:'https://cdn.pixabay.com/photo/2021/06/25/23/27/forest-6364913_960_720.jpg',
    },
    {
      title:'Mountain and the Sea',
      url:'https://cdn.pixabay.com/photo/2021/05/25/12/59/mountain-6282389_960_720.jpg',
    },
    
  ]


}

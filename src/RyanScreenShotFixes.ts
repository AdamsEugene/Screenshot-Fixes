export default class RyanScreenshotFixes {
  private document: Document;

  /* constructor(dom: Document = document) {
    this.document = dom;
  } */

  constructor(dom: Document = document) {
    this.document = dom;
    this.setupLoadEventListener();
  }

  private setupLoadEventListener(): void {
    window.addEventListener("load", () => {
      this.init();
    });
  }

  public init(): void {
    this.LogoxUpdatePageElements();
  }

  // theLogOx
 private LogoxUpdatePageElements() {
    var posts = this.document.querySelectorAll('.post_img.slick-slide') as NodeListOf<HTMLElement>;
    posts.forEach(function(post) {
        var img = post.querySelector('img');
        if (img) {
            img.style.height = ''; 
        }
    });
    var elements = this.document.querySelectorAll('.featured-collection-section') as NodeListOf<HTMLElement>;


    // Loop through each element
    elements.forEach(function(element) {
        element.classList.remove('pt-6', 'pt-9', 'pb-9');

        element.style.paddingTop = '';
        element.style.paddingBottom = '';
        
        element.style.height = '';
    });
}

}
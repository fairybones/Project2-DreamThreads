
                     // Function for opening the modal 
                     function openModal()  
                     { 
                      // is-active class of the modal 
                      document.getElementById("modal1").classList.add("is-active"); 
                     } 
                     // Adding event listeners for closing the modal 
                      document.querySelectorAll( 
                      ".modal-background, .modal-close," + 
                      ".modal-card-head .delete,.modal-card-foot .button" 
                     ) 
                      .forEach(($el) => { 
                        const $modal = $el.closest(".modal"); 
                
                        $el.addEventListener("click", () => { 
                          // removing is-active class from modal 
                          $modal.classList.remove("is-active"); 
                        }); 
                      }); 

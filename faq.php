<?php include "templates/head.php"; ?>

<body>
  <?php include "templates/header.php"; ?>

  <div class="main-body">
    <!-- start list question -->
    <div class="header-wrapper">
      <div class="container">
        <div class="faq-header">
          <div class="content">
            <h3 class="faq-title title-lg">FAQs</h3>
            <div class="list-faq">
              <a href="#" class="faq-item">
                <span class="item-content">Vấn đề thường gặp</span>
              </a>
              <a href="#" class="faq-item">
                <span class="item-content">Phương pháp luyện giao tiếp của Bitu</span>
              </a>
              <a href="#" class="faq-item">
                <span class="item-content">Chính sách hoàn buổi</span>
              </a>
              <a href="#" class="faq-item">

                <span class="item-content">Lộ trình và chủ đề luyện nói</span>
              </a>
              <a href="#" class="faq-item">

                <span class="item-content">Tính năng của App Bitu</span>
              </a>
              <a href="#" class="faq-item">
                <span class="item-content">Mô hình 1-1 và 1-2</span>
              </a>
              <a href="#" class="faq-item">

                <span class="item-content">Về Moderators</span>
              </a>
              <a href="#" class="faq-item">
                <span class="item-content">Thanh toán</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end list question -->

    <!-- start list problem  -->
    <div class="problem-wrapper">
      <div class="container">
        <div class="con-problem">
          <div class="main-content">
            <h3 class="title-peroblem">Vấn đề thường gặp</h3>
            <div class="list-problem">
              <div class="problem-item">
                <button type="button" class="collapsible">
                  <span>Open Collapsible</span>
                </button>
                <div class="problem-content">
                  <p>Lorem ipsum...</p>
                </div>
              </div>
              <div class="problem-item">
                <button type="button" class="collapsible">
                  <span>Open Collapsible</span>
                </button>
                <div class="problem-content">
                  <p>Lorem ipsum...</p>
                </div>
              </div>
              <div class="problem-item">
                <button type="button" class="collapsible">
                  <span>Open Collapsible</span>
                </button>
                <div class="problem-content">
                  <p>Lorem ipsum...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  <!-- end list problem -->
  </div>

  <?php include "templates/footer.php"; ?>
</body>
<script>
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
</script>

</html>

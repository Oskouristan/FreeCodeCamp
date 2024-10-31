<?php
// Charger les articles depuis le fichier JSON
$json_file = file_get_contents('path_to/your_json_file.json'); // Remplacez par le chemin réel de votre fichier JSON
$articles = json_decode($json_file, true); // Convertir JSON en tableau PHP
?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Health Tracker - Blog</title>
  <link rel="stylesheet" href="assets/styles/style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.9.1/font/bootstrap-icons.min.css">
</head>
<body>

  <div id="header"></div>

  <div class="main-layout">
    <!-- Barre de navigation verticale -->
    <aside class="sidebar">
      <ul>
        <li><a href="#"><i class="bi bi-house"></i> Home</a></li>
        <li><a href="#"><i class="bi bi-cloud"></i> Cloud</a></li>
        <li><a href="#"><i class="bi bi-stack"></i> Database</a></li>
        <li><a href="#"><i class="bi bi-code-slash"></i> Development</a></li>
        <li><a href="#"><i class="bi bi-people"></i> Community</a></li>
        <li><a href="#"><i class="bi bi-arrow-repeat"></i> Updates</a></li>
        <li><a href="#"><i class="bi bi-plus"></i> More</a></li>
      </ul>
    </aside>

    <!-- Section des articles de blog -->
    <main class="content">
      <?php foreach ($articles as $article): ?>
        <div class="blog-card">
          <img src="<?php echo $article['image_url']; ?>" alt="Image Blog">
          <div class="blog-info">
            <h3><?php echo $article['title']; ?></h3>
            <p><?php echo $article['description']; ?></p>
            <button>Get Started</button>
          </div>
        </div>
      <?php endforeach; ?>
    </main>
  </div>

  <div id="footer"></div>

  <script>
    // Chargement du header
    fetch('header.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur lors du chargement du header');
        }
        return response.text();
      })
      .then(data => {
        document.getElementById('header').innerHTML = data;
      })
      .catch(error => console.error('Erreur lors du chargement du header:', error));

    // Chargement du footer
    fetch('footer.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur lors du chargement du footer');
        }
        return response.text();
      })
      .then(data => {
        document.getElementById('footer').innerHTML = data;
      })
      .catch(error => console.error('Erreur lors du chargement du footer:', error));
  </script>

</body>
</html>

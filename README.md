
**README - Application PWA avec mode hors ligne**

Cette application PWA (Progressive Web App) vous permet de tester le mode hors ligne en utilisant le Service Worker. Lorsque l'utilisateur est déconnecté d'Internet, une page de secours ("offline.html") sera affichée.

### Instructions d'utilisation


1. Clonez ce dépôt sur votre machine locale :

   ```
   git clone https://github.com/ApollineLH/PWA
   ```

2. Naviguez vers le répertoire racine de l'application.

3. Lancez le serveur HTTP en utilisant l'outil de votre choix. Par exemple, si vous avez déjà installé `http-server` globalement, exécutez la commande suivante pour démarrer un serveur local sur le port 8000 :

   ```
   http-server -p 8000
   ```

4. Pour accéder à l'application à partir de votre téléphone mobile, vous pouvez utiliser un outil de tunneling tel que Ngrok. Exécutez Ngrok en spécifiant le port sur lequel le serveur local est en cours d'exécution :

   ```
   ngrok http 8000
   ```

5. Ngrok générera une URL publique que vous pouvez utiliser pour accéder à votre application à partir de votre téléphone mobile.

6. Sur votre téléphone mobile, ouvrez le navigateur et entrez l'URL fournie par Ngrok pour accéder à votre application.


### Structure du projet

- `index.html` : Page principale de l'application.
- `offline.html` : Page de secours à afficher lorsque l'utilisateur est hors ligne.
- `css/style.css` : Fichier CSS contenant les styles de l'application.
- `js/app.js` : Fichier JavaScript qui enregistre le Service Worker et gère les fonctionnalités de l'application.
- `service-worker.js` : Fichier du Service Worker qui met en cache les ressources et renvoie la page de secours en cas de déconnexion.

### Prérequis

- Node.js et npm (Node Package Manager) : Assurez-vous d'avoir Node.js et npm installés sur votre machine. Vous pouvez vérifier si Node.js est installé en exécutant la commande `node -v` dans votre terminal. Pour installer Node.js, vous pouvez le télécharger à partir du site officiel de Node.js (https://nodejs.org) et suivre les instructions d'installation pour votre système d'exploitation.

- Package `http-server` : Si vous n'avez pas encore installé le package `http-server` globalement, vous pouvez l'installer en exécutant la commande suivante :

  ```
  npm install -g http-server
  ```

  Cela permettra d'avoir accès à la commande `http-server` pour démarrer un serveur HTTP local.

- Ngrok (facultatif) : Si vous souhaitez tester l'application sur votre téléphone mobile à l'aide de Ngrok, vous devrez installer Ngrok sur votre machine. Vous pouvez télécharger Ngrok à partir du site officiel (https://ngrok.com) et suivre les instructions d'installation pour votre système d'exploitation.

Assurez-vous d'avoir respecté ces prérequis avant de lancer l'application PWA avec mode hors ligne.

### Test de fonctionnement 

- Sur navigateur:
utiliser un navigateur en mode navigation privé, accédez aux outils de dev , depuis l'onglet network cliquez sur offline et rechargez la page, vous devriez voir la page "offline.html" avec un fond noir, le titre en blanc et le paragraphe en rouge.
- Sur mobile récuperez l'adresse fournie par ngrok. En cliquant vous arriverez sur la page index.html affichant un fond blanc et oneline. Passez votre téléphone en mode avion, rechargez la page. Vous devriez voir la page "offline.html" avec un fond noir, le titre en blanc et le paragraphe en rouge.

### Remarque

- Pour tester le mode hors ligne, assurez-vous que votre téléphone est réellement hors ligne(mode avion), car le mode hors ligne ne fonctionnera pas avec Ngrok, qui simule une connexion en ligne.


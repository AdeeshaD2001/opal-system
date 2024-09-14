def versionIncrement() {
    echo "Incrementing the app version"

    // Read the current version from package.json
    def packageJson = readJSON file: 'package.json'
    def currentVersion = packageJson.version

    // Parse the version components
    def (major, minor, patch) = currentVersion.tokenize('.')

    // Increment the patch version
    def newPatch = patch.toInteger() + 1
    def newVersion = "${major}.${minor}.${newPatch}"

    // Update package.json with the new version
    bat "npm version ${newVersion} --no-git-tag-version"

    echo "New Image Version Tag is ${newVersion}-${BUILD_NUMBER}"

    // Return the new version tag combined with the build number
    return "${newVersion}-${BUILD_NUMBER}"
}

def deploy() {
    echo "Deploying the app to EC2 instance"

    def dockerCommand = "docker run -d -p 3000:3000 yourdockerhubusername/your-app-name:${env.IMAGE_TAG}"

    sshagent(['aws-ec2-ssh']) {
        // Execute SSH command for Windows
        bat "ssh -o StrictHostKeyChecking=no ec2-user@your-ec2-ip-address ${dockerCommand}"
    }
}

def commitVersionUpdate() {
    sshagent(['jenkins-github-ssh']) {
        bat 'git config user.email "jenkins@ci-cd.com"'
        bat 'git config user.name "Jenkins User"'
        bat "git remote set-url origin git@github.com:YourUsername/your-repo-name.git"
        bat "git add ."
        bat 'git commit -m "Jenkins Version Bump"'
        bat 'git push origin HEAD:main'
    }
}

return this

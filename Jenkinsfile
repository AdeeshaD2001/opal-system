#!/usr/bin/env groovy

// Load the shared library from GitHub
library identifier: "shared-lib@main", retriever: modernSCM(
    [
        $class       : 'GitSCMSource',
        remote       : 'https://github.com/UchihaIthachi/jenkins-shared-library',
        credentialsId: 'GithubCredentials',
    ]
)

def gv

pipeline {
    agent any
    tools {
        nodejs 'nodejs-22.7.0'
    }
    parameters {
        string(name: 'NAME', defaultValue: 'Harshana Lakshara', description: 'Executor name')
    }
    stages {
        stage("Init") {
            steps {
                script {
                    echo "Pipeline initiated by ${params.NAME}"

                    sh 'node --version'
                    sh 'npm --version'
                    
                    if (!fileExists('package.json')) {
                        error "package.json not found"
                    }
                    echo "package.json contents: ${readFile('package.json')}"
                    
                    // Ensure the script.groovy file is loaded correctly
                    if (fileExists('script.groovy')) {
                        gv = load "script.groovy"
                    } else {
                        error "script.groovy not found"
                    }
                }
            }
        }
        stage("Version Increment") {
            steps {
                script {
                    env.IMAGE_TAG = gv.versionIncrement()
                    echo "Image tag is: ${env.IMAGE_TAG}"
                }
            }
        }
        stage("Build") {
            steps {
                script {
                    sh 'npm ci'
                    sh 'npm run build:no-lint'
                }
            }
        }
        stage("Build Docker Image and Push to Docker Hub") {
            steps {
                script {
                    def imageNameToPass = "harshana2020/opal-system:${env.IMAGE_TAG}"
                    echo "Image name is: ${imageNameToPass}"

                    // Ensure the buildImage, dockerHubLogin, and dockerHubPush methods are available in the shared library
                    if (buildImage && dockerHubLogin && dockerHubPush) {
                        buildImage(imageNameToPass)
                        dockerHubLogin()
                        dockerHubPush(imageNameToPass)
                    } else {
                        error "Required methods not found in the shared library"
                    }
                }
            }
        }
        stage("Deploy") {
            steps {
                script {
                    gv.deploy()
                }
            }
        }
        stage("Commit version update to Git") {
            steps {
                script {
                    gv.commitVersionUpdate()
                }
            }
        }
    }
}

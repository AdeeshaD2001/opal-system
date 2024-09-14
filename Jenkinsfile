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

                    // Run node and npm commands using 'bat' for Windows
                    bat 'node --version'
                    bat 'npm --version'
                    
                    // Check for package.json on Windows
                    if (!fileExists('package.json')) {
                        error "package.json not found"
                    }
                    echo "package.json contents: ${readFile('package.json')}"

                    // Load script.groovy for Windows
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
                    // Use 'bat' for Windows
                    bat 'npm ci'
                    bat 'npm run build:no-lint'
                }
            }
        }
        stage("Build Docker Image and Push to Docker Hub") {
            steps {
                script {
                    def imageNameToPass = "harshana2020/opal-system:${env.IMAGE_TAG}"
                    echo "Image name is: ${imageNameToPass}"

                    // Assuming buildImage, dockerHubLogin, and dockerHubPush are adapted for Windows
                    buildImage imageNameToPass
                    dockerHubLogin()
                    dockerHubPush imageNameToPass
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

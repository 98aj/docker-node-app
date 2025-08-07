pipeline{
    agent any

    environment{
        CONTAINER_NAME = "node-app-container"
        IMAGE_NAME = "node-app"
        PORT = "4000"
    }
    stages{
        stage("Clone"){
            steps{
                checkout scm
            }
        }

        stage("Build docker image"){
            steps{
                '''
                docker build -t $IMAGE_NAME .
                '''
            }
        }

        stage("Stop old container"){
            // || true represent that Try to stop the container If it doesnt exist or throws an error Ignore the error and continue the pipeline
            steps{
                '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                '''
            }
        }

        // --restart always=>  You want the app to stay running even if EC2 reboots You want to avoid manual container restart after crash or power-off You treat your container like a persistent service
        stage("Run docker container"){
            steps{
                '''
                docker run -d --name $CONTAINER_NAME -p 4000:4000 --restart always $IMAGE_NAME
                '''
            }
        }
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}
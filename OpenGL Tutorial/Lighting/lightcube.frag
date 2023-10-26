#version 330 core
out vec4 FragColor;

uniform vec3 cubecolor;

void main()
{
FragColor = vec4(cubecolor, 1.0);
}
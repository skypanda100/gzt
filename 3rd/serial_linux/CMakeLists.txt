cmake_minimum_required(VERSION 3.7)
project(serial)

set(CMAKE_BUILD_TYPE Release)

set(CMAKE_C_STANDARD 99)

set(SOURCE_FILES main.c)
add_executable(serial ${SOURCE_FILES})
target_link_libraries(serial curl)

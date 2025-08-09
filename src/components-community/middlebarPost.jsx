import React, { useState } from 'react'

function MiddlebarPost() {
  const [postContent, setPostContent] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)

  return (
    <div className='mx-2 sm:mx-4 lg:mx-6 px-2 sm:px-4 h-full flex flex-col'>
        <div className="mt-3 sm:mt-4">
            <input 
                type="text" 
                placeholder="🔍 Search posts..." 
                className="block w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto px-6 sm:px-8 md:px-10 py-2 sm:py-3 text-base sm:text-lg md:text-xl lg:text-2xl rounded-xl bg-white border-2 border-slate-200 text-slate-700 placeholder:text-slate-500 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400/30 focus:border-blue-400 focus:shadow-xl transition-all duration-300"
            />
        </div>
        <div className='bg-gradient-to-br from-white to-slate-50 flex-1 mt-4 sm:mt-6 lg:mt-8 rounded-3xl p-4 sm:p-6 lg:p-8 text-slate-800 shadow-xl border border-slate-200/50 flex flex-col overflow-y-auto'> 
            <div className="max-w-2xl mx-auto">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-center">
                    Create a New Post
                </h2>
                
                <form className="space-y-4 sm:space-y-6">
                    {/* Post Content */}
                    <div>
                        <label className="block text-sm sm:text-base font-medium mb-2">
                            What's on your mind?
                        </label>
                        <textarea 
                            placeholder='Share your thoughts, ideas, or updates with the community...'
                            value={postContent}
                            onChange={(e) => setPostContent(e.target.value)}
                            className="w-full h-32 sm:h-40 lg:h-48 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-700 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 transition-all duration-300 resize-none shadow-sm"
                            rows={6}
                        />
                        <div className="text-right mt-2">
                            <span className="text-xs sm:text-sm text-slate-600">
                                {postContent.length}/500 characters
                            </span>
                        </div>
                    </div>

                    {/* Image Upload */}
                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 sm:p-8 hover:border-blue-400 hover:bg-blue-50/30 transition-all duration-300 bg-slate-50/50">
                        <div className="text-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-sm sm:text-base font-medium mb-2 text-slate-800">Upload Image</h3>
                            <p className="text-xs sm:text-sm text-slate-600 mb-4">
                                Add photos to make your post more engaging
                            </p>
                            <input 
                                type="file" 
                                accept="image/*"
                                onChange={(e) => setSelectedFile(e.target.files[0])}
                                className="hidden" 
                                id="file-upload"
                            />
                            <label 
                                htmlFor="file-upload"
                                className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 text-slate-700 rounded-lg text-sm sm:text-base font-medium cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg border border-blue-200/50"
                            >
                                Choose File
                            </label>
                            {selectedFile && (
                                <p className="text-xs sm:text-sm text-slate-700 mt-2 font-medium">
                                    Selected: {selectedFile.name}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Post Options */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <select className="flex-1 px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-700 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 shadow-sm">
                            <option value="">Select Category</option>
                            <option value="innovation">💡 Innovation</option>
                            <option value="funding">💰 Funding</option>
                            <option value="product">🚀 Product</option>
                            <option value="networking">🤝 Networking</option>
                            <option value="general">💬 General</option>
                        </select>
                        <div className="flex items-center space-x-3">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-400" />
                                <span className="text-xs sm:text-sm text-slate-700">Allow comments</span>
                            </label>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                        <button 
                            type="button"
                            className="flex-1 px-6 py-3 bg-gradient-to-r from-slate-100 to-blue-100 hover:from-slate-200 hover:to-blue-200 text-slate-700 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-slate-200/50"
                        >
                            Save Draft
                        </button>
                        <button 
                            type="submit"
                            className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white rounded-xl text-sm sm:text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            Publish Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default MiddlebarPost